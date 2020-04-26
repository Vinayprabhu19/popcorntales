package com.serverless.service;

import java.io.IOException;

import org.apache.http.HttpStatus;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.serverless.Handler;
import com.serverless.config.DynamoDBOperations;
import com.serverless.dto.ApiGatewayProxyResponse;
import com.serverless.models.Movie;
import com.serverless.utils.DTOUtil;

public class MovieService {
	
	private static final Logger LOG = LogManager.getLogger(MovieService.class);
    private static final String DYNAMODB_TABLE_MOVIE = "MOVIE";
    private static final Regions REGION = Regions.US_EAST_1;
    

	public static ApiGatewayProxyResponse addMovie(JSONObject input){
		ApiGatewayProxyResponse response = new ApiGatewayProxyResponse();
		try {
			DynamoDB dynamoDB = DynamoDBOperations.initDynamoDbClient(REGION);
			Movie movie = new Movie();
			movie.setTitle(input.getString("title"));
			movie.setTitleImage(input.getString("titleImage"));
			movie.setLanguage(input.getString("language"));
			movie.setRating(input.getString("rating"));
			movie.setYear(input.getString("year"));
			if(input.has("genre")) {
				JSONArray genres= new JSONArray(input.get("genre").toString().split(","));  
				movie.setGenre(genres);
			}
			DynamoDBOperations.persistData(dynamoDB, DYNAMODB_TABLE_MOVIE, movie.getItem());
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
}
