package com.serverless;

import java.io.IOException;
import java.util.Collections;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import org.apache.http.HttpStatus;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;

import com.amazonaws.annotation.Beta;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.PutItemOutcome;
import com.amazonaws.services.dynamodbv2.document.spec.PutItemSpec;
import com.amazonaws.services.dynamodbv2.model.ConditionalCheckFailedException;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.fasterxml.jackson.core.JsonParser;
import com.google.gson.Gson;
import com.serverless.config.DynamoDBOperations;
import com.serverless.dto.ApiGatewayProxyRequest;
import com.serverless.dto.ApiGatewayProxyResponse;
import com.serverless.models.Movie;
import com.serverless.service.MovieService;

public class Handler implements RequestHandler<ApiGatewayProxyRequest, ApiGatewayProxyResponse> {
	
	private static final Logger LOG = LogManager.getLogger(Handler.class);
	
	@Override
	public ApiGatewayProxyResponse handleRequest(ApiGatewayProxyRequest input, Context context) {
		ApiGatewayProxyResponse res = new ApiGatewayProxyResponse();
		JSONObject body = new JSONObject(input.getBody());
		LOG.info(body);
		return MovieService.addMovie(body);
	} 
	 
}
