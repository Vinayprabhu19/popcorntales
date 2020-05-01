package com.serverless.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.TimeZone;

import org.apache.http.HttpStatus;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.ItemCollection;
import com.amazonaws.services.dynamodbv2.document.ScanOutcome;
import com.amazonaws.services.dynamodbv2.document.Table;
import com.amazonaws.services.dynamodbv2.document.spec.GetItemSpec;
import com.serverless.config.DynamoDBOperations;
import com.serverless.dto.ApiGatewayProxyResponse;
import com.serverless.models.Movie;
import com.serverless.models.MovieReview;
import com.serverless.models.Review;
import com.serverless.utils.DTOUtil;

public class MovieService {
	
	private static final Logger LOG = LogManager.getLogger(MovieService.class);
    private static final String DYNAMODB_TABLE_MOVIE = "MOVIE";
    private static final String DYNAMODB_TABLE_MOVIE_REVIEW = "MOVIE_REVIEW";
    private static final String DYNAMO_AUTH_TABLE = "AUTH";
    private static final Regions REGION = Regions.US_EAST_1;
    

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
			movie.setTimestamp(nowAsISO);
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
				movies.put(new JSONObject(iterator.next().toJSON()));
			}
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
			LOG.info(movieName);
			Item item = movieTable.getItem(spec);
			    
			if(item == null) {
				response.setBody(DTOUtil.getMessage("No Movie"));
				response.setStatusCode(HttpStatus.SC_BAD_REQUEST);
				return response;
			}
			response.setBody(item.toJSONPretty());
			response.setStatusCode(HttpStatus.SC_OK);
			return response;
			
		} catch (Exception e) {
			e.printStackTrace();
			response.setBody(DTOUtil.getMessage(e.getMessage()));
			response.setStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR);
			return response;
		}
		
	}
}
