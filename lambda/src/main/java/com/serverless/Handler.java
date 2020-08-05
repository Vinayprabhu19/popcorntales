package com.serverless;

import org.apache.commons.codec.binary.Base64;
import org.json.JSONObject;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.serverless.dto.ApiGatewayProxyRequest;
import com.serverless.dto.ApiGatewayProxyResponse;
import com.serverless.service.MovieService;

public class Handler implements RequestHandler<ApiGatewayProxyRequest, ApiGatewayProxyResponse> {
	
	@Override
	public ApiGatewayProxyResponse handleRequest(ApiGatewayProxyRequest input, Context context) {
		String b= input.getBody();
		String decodedString = decodeString(b);
		JSONObject body = new JSONObject(decodedString);
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
	
	public ApiGatewayProxyResponse addImage(ApiGatewayProxyRequest input,Context context) {
		String b= input.getBody();
		String decodedString = decodeString(b);
		JSONObject body = new JSONObject(decodedString);
		return MovieService.addImage(body);
	}

	
	private String decodeString(String encodedString) {
		byte[] byteArray = Base64.decodeBase64(encodedString.getBytes());
		return new String(byteArray);
	}
}
