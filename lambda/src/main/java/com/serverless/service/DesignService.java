package com.serverless.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.apache.http.HttpStatus;
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
import com.serverless.dto.Design;
import com.serverless.utils.DTOUtil;

public class DesignService {
	
    private static final String DYNAMODB_TABLE_DESIGN = "Design";
    private static final String DYNAMO_AUTH_TABLE = "AUTH";
    private static final Regions REGION = Regions.US_EAST_1;
    private static final String BUCKET_NAME = "popcorntales-media";

	
	public static ApiGatewayProxyResponse getDesigns() {
		ApiGatewayProxyResponse response = new ApiGatewayProxyResponse();
		try {
			DynamoDB dynamoDB = DynamoDBOperations.initDynamoDbClient(REGION);
			Table designTable = dynamoDB.getTable(DYNAMODB_TABLE_DESIGN);
			ItemCollection<ScanOutcome> items = designTable.scan ();
			        
			Iterator<Item> iterator = items.iterator(); 
			    
			List<Item> designList = new ArrayList<Item>();
			while (iterator.hasNext()) { 
				Item item = iterator.next();
				String designImage = DTOUtil.API_OBJECT_URL + item.get("image");
				item.with("image", designImage);
				designList.add(item);
//				movies.put(new JSONObject(item.toJSON()));
			}
			JSONArray designs = new JSONArray();
			for(int i=0;i<designList.size();i++) {
				designs.put(new JSONObject(designList.get(i).toJSON()));
			}
			response.addHeader("Content-type", "application/json");
			response.addHeader("Cache-Control","max-age=600");
			response.setBody(designs.toString());
			response.setStatusCode(HttpStatus.SC_OK);
			return response;
			
		} catch (Exception e) {
			e.printStackTrace();
			response.setBody(DTOUtil.getMessage(e.getMessage()));
			response.setStatusCode(HttpStatus.SC_INTERNAL_SERVER_ERROR);
			return response;
		}
		
	}
	 
	 private static String getLastModified(Date date) {
		 SimpleDateFormat sdf = new SimpleDateFormat(
                 "EEE, dd MMM yyyy hh:mm:ss");
		 return sdf.format(date)+" GMT";
	 }
}
