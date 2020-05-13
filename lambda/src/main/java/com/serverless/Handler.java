package com.serverless;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONObject;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.serverless.dto.ApiGatewayProxyRequest;
import com.serverless.dto.ApiGatewayProxyResponse;
import com.serverless.service.MovieService;

public class Handler implements RequestHandler<ApiGatewayProxyRequest, ApiGatewayProxyResponse> {
	
	private static final Logger LOG = LogManager.getLogger(Handler.class);
	
	@Override
	public ApiGatewayProxyResponse handleRequest(ApiGatewayProxyRequest input, Context context) {
		JSONObject body = new JSONObject(input.getBody());
		return MovieService.addMovie(body);
	} 

	public ApiGatewayProxyResponse getMovies(ApiGatewayProxyRequest input,Context context) {
		return MovieService.getMovies();
	}
	
	public ApiGatewayProxyResponse getMovieReview(ApiGatewayProxyRequest input,Context context) {
		String movieName = input.getQueryStringParameters().get("movie");
		return MovieService.getMovieReview(movieName);
		
	}
	
	public ApiGatewayProxyResponse fetchImage(ApiGatewayProxyRequest input,Context context) {
		return MovieService.fetchImage(input);
		
	}
	
	public ApiGatewayProxyResponse resizeImage(ApiGatewayProxyRequest input,Context context) {
		return MovieService.resizeImage(input);
		
	}
}
