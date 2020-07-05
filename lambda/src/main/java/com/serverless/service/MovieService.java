package com.serverless.service;

import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.TimeZone;

import javax.imageio.IIOImage;
import javax.imageio.ImageIO;
import javax.imageio.ImageWriteParam;
import javax.imageio.ImageWriter;
import javax.imageio.stream.ImageOutputStream;

import org.apache.http.HttpStatus;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.ItemCollection;
import com.amazonaws.services.dynamodbv2.document.ScanOutcome;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.dynamodbv2.document.spec.GetItemSpec;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.serverless.config.DynamoDBOperations;
import com.serverless.dto.ApiGatewayProxyRequest;
import com.serverless.dto.ApiGatewayProxyResponse;
import com.serverless.models.Movie;
import com.serverless.models.MovieReview;
import com.serverless.models.Review;
import com.serverless.utils.DTOUtil;

public class MovieService {
	
    private static final String DYNAMODB_TABLE_MOVIE = "MOVIE";
    private static final String DYNAMODB_TABLE_MOVIE_REVIEW = "MOVIE_REVIEW";
    private static final String DYNAMO_AUTH_TABLE = "AUTH";
    private static final Regions REGION = Regions.US_EAST_1;
    private static final String BUCKET_NAME = "popcorntales-media";

	public static ApiGatewayProxyResponse addMovie(JSONObject input){
		ApiGatewayProxyResponse response = new ApiGatewayProxyResponse();
		try {
			DynamoDB dynamoDB = DynamoDBOperations.initDynamoDbClient(REGION);
			
			//Check for authentication
			Table authTable = dynamoDB.getTable(DYNAMO_AUTH_TABLE);
			if(!input.has("userId") || !input.has("password")) {
				response.setBody(DTOUtil.getMessage("Enter the credentials"));
				response.setStatusCode(HttpStatus.SC_BAD_REQUEST);
				return response;
			}
			GetItemSpec spec = new GetItemSpec()
				    .withPrimaryKey("UserId", input.getString("userId"));
			Item item = authTable.getItem(spec);
			

			if(!item.get("Password").equals(input.get("password"))) {
				response.setBody(DTOUtil.getMessage("Incorrect password"));
				response.setStatusCode(HttpStatus.SC_BAD_REQUEST);
				return response;
			}
			
			//Get individual objects
			String title = input.getString("title");
			String titleImage = input.getString("titleImage");
			String language = input.getString("language");
			Float rating = input.getFloat("rating");
			Float scriptRating = input.getFloat("scriptRating");
			Float directionRating = input.getFloat("directionRating");
			Float dialoguesRating = input.getFloat("dialoguesRating");
			Float cinematographyRating = input.getFloat("cinematographyRating");
			Float editingRating = input.getFloat("editingRating");
			Float musicRating = input.getFloat("musicRating");
			Float actingRating = input.getFloat("actingRating");
			String year = input.getString("year");
			JSONObject reviewObj = input.getJSONObject("review");		
			JSONArray genres=input.getJSONArray("genre");
			JSONObject ticketDetails = input.getJSONObject("ticketDetails");
			JSONArray cast = input.getJSONArray("cast");
			String trailer = input.getString("trailer");
			
			Movie movie = new Movie();
			MovieReview movieReview = new MovieReview();
			movie.setTitle(title);
			movie.setTitleImage(titleImage);
			movie.setLanguage(language);
			movie.setRating(rating);
			movie.setYear(year);
			movie.setGenre(genres);
			
			Review review = new Review();
			review.setSynopsis(reviewObj.getString("synopsis"));
			review.setPros(reviewObj.getJSONArray("pros"));
			review.setCons(reviewObj.getJSONArray("cons"));
			movieReview.setTitle(title);
			movieReview.setTitleImage(titleImage);
			movieReview.setLanguage(language);
			movieReview.setRating(rating);
			movieReview.setScriptRating(scriptRating);
			movieReview.setDirectionRating(directionRating);
			movieReview.setDialoguesRating(dialoguesRating);
			movieReview.setCinematographyRating(cinematographyRating);
			movieReview.setEditingRating(editingRating);
			movieReview.setMusicRating(musicRating);
			movieReview.setActingRating(actingRating);
			movieReview.setYear(year);
			movieReview.setGenre(genres);
			movieReview.setReview(review);
			movieReview.setTicketImage(ticketDetails.getString("ticketImage"));
			movieReview.setWatchDate(ticketDetails.getString("watchDate"));
			movieReview.setPlaceWatched(ticketDetails.getString("placeWatched"));
			movieReview.setCast(cast);
			movieReview.setTrailer(trailer);
			TimeZone tz = TimeZone.getTimeZone("UTC");
			DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm'Z'"); // Quoted "Z" to indicate UTC, no timezone offset
			df.setTimeZone(tz);
			String nowAsISO = df.format(new Date());
			movie.setTimeStamp(nowAsISO);
			DynamoDBOperations.persistData(dynamoDB, DYNAMODB_TABLE_MOVIE, movie.getItem());
			DynamoDBOperations.persistData(dynamoDB, DYNAMODB_TABLE_MOVIE_REVIEW, movieReview.getItem());
			response.setBody(DTOUtil.getMessage("Added Movie"));
			response.setStatusCode(HttpStatus.SC_CREATED);
			return response;
		} catch (JSONException e) {
			e.printStackTrace();
			response.setBody(DTOUtil.getMessage(e.getMessage()));
			response.setStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR);
			return response;
		}
		catch(Exception e) {
			e.printStackTrace();
			response.setBody(DTOUtil.getMessage(e.getMessage()));
			response.setStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR);
			return response;
		}
	}
	
	public static ApiGatewayProxyResponse getMovies() {
		ApiGatewayProxyResponse response = new ApiGatewayProxyResponse();
		try {
			DynamoDB dynamoDB = DynamoDBOperations.initDynamoDbClient(REGION);
			Table movieTable = dynamoDB.getTable(DYNAMODB_TABLE_MOVIE);
			ItemCollection<ScanOutcome> items = movieTable.scan ();
			        
			Iterator<Item> iterator = items.iterator(); 
			    
			JSONArray movies = new JSONArray();
			while (iterator.hasNext()) { 
				Item item = iterator.next();
				String titleImage = DTOUtil.API_OBJECT_URL + item.get("titleImage");
				item.with("titleImage", titleImage);
				movies.put(new JSONObject(item.toJSON()));
			}
			response.addHeader("Content-type", "application/json");
			response.addHeader("Cache-Control","max-age=600");
			response.setBody(movies.toString());
			response.setStatusCode(HttpStatus.SC_OK);
			return response;
			
		} catch (Exception e) {
			e.printStackTrace();
			response.setBody(DTOUtil.getMessage(e.getMessage()));
			response.setStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR);
			return response;
		}
		
	}
	
	public static ApiGatewayProxyResponse getMovieReview(String movieName) {
		ApiGatewayProxyResponse response = new ApiGatewayProxyResponse();
		try {
			DynamoDB dynamoDB = DynamoDBOperations.initDynamoDbClient(REGION);
			Table movieTable = dynamoDB.getTable(DYNAMODB_TABLE_MOVIE_REVIEW);
			
			
			GetItemSpec spec = new GetItemSpec()
				    .withPrimaryKey("title", movieName);
//		
			Item item = movieTable.getItem(spec);
			    
			if(item == null) {
				response.setBody(DTOUtil.getMessage("No Movie"));
				response.setStatusCode(HttpStatus.SC_BAD_REQUEST);
				return response;
			}
			String titleImage = DTOUtil.API_OBJECT_URL + item.get("titleImage");
			item.with("titleImage", titleImage);
			
			response.addHeader("Content-type", "application/json");
			response.addHeader("Cache-Control","max-age=86400");
			response.setBody(item.toJSON());
			response.setStatusCode(HttpStatus.SC_OK);
			return response;
			
		} catch (Exception e) {
			e.printStackTrace();
			response.setBody(DTOUtil.getMessage(e.getMessage()));
			response.setStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR);
			return response;
		}
		
	}
	

	public static ApiGatewayProxyResponse fetchImage(ApiGatewayProxyRequest input) {

		Map<String,String> params = input.getQueryStringParameters();
		String objectKey= params.get("object");
		ApiGatewayProxyResponse response = new ApiGatewayProxyResponse();

         // Read the source image
         try {
        	 AmazonS3 s3Client = new AmazonS3Client();
             S3Object s3Object = s3Client.getObject(new GetObjectRequest(
                     BUCKET_NAME, objectKey));
             String contentType=s3Object.getObjectMetadata().getContentType().replace("image/", "");
             InputStream objectData = s3Object.getObjectContent();
        	 final ByteArrayOutputStream os = new ByteArrayOutputStream();
			BufferedImage srcImage = ImageIO.read(objectData);
			if(params.containsKey("width") && params.containsKey("height")) {
				int width = Integer.parseInt(input.getQueryStringParameters().get("width"));
				int height = Integer.parseInt(input.getQueryStringParameters().get("height"));
				srcImage =resize(srcImage, height,width);
			}
			ImageIO.write(srcImage, contentType, os);
	        byte[] imageBytes = os.toByteArray();
            os.close();
	        Base64.Encoder encoder = Base64.getEncoder();
	        String b64String = encoder.encodeToString(imageBytes);
	        if(objectKey.startsWith("Banners"))
	        	response.addHeader("Cache-Control","max-age=86400");
	        else
	        	response.addHeader("Cache-Control","max-age=3664400");
	        response.addHeader("Content-type", s3Object.getObjectMetadata().getContentType());
			response.setBody(b64String);
			response.setStatusCode(HttpStatus.SC_OK);
			response.setBase64Encoded(true);
			return response;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.setBody(DTOUtil.getMessage(e.getMessage()));
			response.setStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR);
			return response;
		}
	}
	
	public static ApiGatewayProxyResponse resizeImage(ApiGatewayProxyRequest input) {
		JSONObject request = new JSONObject(input.getBody());
		int width = request.getInt("width");
		int height = request.getInt("height");
		String objectKey = request.getString("key");
		String destKey = request.getString("dest");
		ApiGatewayProxyResponse response = new ApiGatewayProxyResponse();
		 AmazonS3 s3Client = new AmazonS3Client();
         S3Object s3Object = s3Client.getObject(new GetObjectRequest(
                 BUCKET_NAME, objectKey));
         InputStream objectData = s3Object.getObjectContent();

         // Read the source image
         try {
			BufferedImage srcImage = ImageIO.read(objectData);
			srcImage =resize(srcImage, height,width);
			 Iterator<ImageWriter> writers = ImageIO.getImageWritersByFormatName("jpg");
            if (!writers.hasNext())
              throw new IllegalStateException("No writers found");
            ImageWriter writer = (ImageWriter) writers.next();
            ByteArrayOutputStream os=new ByteArrayOutputStream() ;
            ImageOutputStream ios = ImageIO.createImageOutputStream(os);
            writer.setOutput(ios);
            ImageWriteParam param = writer.getDefaultWriteParam();
            // compress to a given quality
            param.setCompressionMode(ImageWriteParam.MODE_EXPLICIT);
            param.setCompressionQuality(0.95f);
             // appends a complete image stream containing a single image and
            //associated stream and image metadata and thumbnails to the output
            writer.write(null, new IIOImage(srcImage, null, null), param);
            ByteArrayInputStream is = new ByteArrayInputStream(os.toByteArray());

            //InputStream is = new ByteArrayInputStream(retValue);
            BufferedImage destImage = ImageIO.read(is);

             ByteArrayOutputStream os1 = new ByteArrayOutputStream();
             ImageIO.write(destImage, "jpg", os1);
             InputStream is1 = new ByteArrayInputStream(os1.toByteArray()); 
             ObjectMetadata meta = new ObjectMetadata();
             meta.setContentLength(os1.size());
             meta.setContentType("image/jpeg");
             s3Client.putObject(BUCKET_NAME,destKey, is1, meta);
             
			response.setBody("Modified file");
			response.setStatusCode(HttpStatus.SC_OK);
			return response;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.setBody(DTOUtil.getMessage(e.getMessage()));
			response.setStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR);
			return response;
		}
	}
	
	public static ApiGatewayProxyResponse addImage(JSONObject input) {
		ApiGatewayProxyResponse 
		response = new ApiGatewayProxyResponse();
		try {
			DynamoDB dynamoDB = DynamoDBOperations.initDynamoDbClient(REGION);
			
			//Check for authentication
			Table authTable = dynamoDB.getTable(DYNAMO_AUTH_TABLE);
			if(!input.has("userId") || !input.has("password")) {
				response.setBody(DTOUtil.getMessage("Enter the credentials"));
				response.setStatusCode(HttpStatus.SC_BAD_REQUEST);
				return response;
			}
			GetItemSpec spec = new GetItemSpec()
				    .withPrimaryKey("UserId", input.getString("userId"));
			Item item = authTable.getItem(spec);
			

			if(!item.get("Password").equals(input.get("password"))) {
				response.setBody(DTOUtil.getMessage("Incorrect password"));
				response.setStatusCode(HttpStatus.SC_BAD_REQUEST);
				return response;
			}
			String base64Data = input.getString("image");
			String imageType = input.getString("imageType");
			String imageName = input.getString("imageName");
			AmazonS3 s3 = new AmazonS3Client();
			byte[] bI = org.apache.commons.codec.binary.Base64.decodeBase64((base64Data.substring(base64Data.indexOf(",")+1)).getBytes());

			InputStream fis = new ByteArrayInputStream(bI);
			ObjectMetadata metadata = new ObjectMetadata();
			metadata.setContentLength(bI.length);
			metadata.setContentType(imageType);
			metadata.setCacheControl("public, max-age=31536000");
			s3.putObject(BUCKET_NAME, imageName, fis, metadata);
			response.setBody(DTOUtil.getMessage("Added image "));
			response.setStatusCode(HttpStatus.SC_CREATED);
		} catch (AmazonServiceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			response.setBody(DTOUtil.getMessage(e.getMessage()));
			response.setStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR);
			return response;
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

			response.setBody(DTOUtil.getMessage(e.getMessage()));
			response.setStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR);
		} catch (AmazonClientException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

			response.setBody(DTOUtil.getMessage(e.getMessage()));
			response.setStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR);
		}
		
		return response;
	}
	
	 private static BufferedImage resize(BufferedImage img, int height, int width) {
	        Image tmp = img.getScaledInstance(width, height, Image.SCALE_SMOOTH);
	        BufferedImage resized = new BufferedImage(width, height,BufferedImage.TYPE_3BYTE_BGR);
	        Graphics2D g2d = resized.createGraphics();
	        g2d.drawImage(tmp, 0, 0, null);
	        g2d.dispose();
	        return resized;
	    }
}
