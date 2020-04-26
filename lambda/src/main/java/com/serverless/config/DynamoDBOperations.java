package com.serverless.config;

import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.document.DynamoDB;
import com.amazonaws.services.dynamodbv2.document.Item;
import com.amazonaws.services.dynamodbv2.document.PutItemOutcome;
import com.amazonaws.services.dynamodbv2.document.spec.PutItemSpec;
import com.amazonaws.services.dynamodbv2.model.ConditionalCheckFailedException;
import com.serverless.models.Movie;

public class DynamoDBOperations {
	private static AmazonDynamoDBClient client;
	
	public static DynamoDB initDynamoDbClient(final Regions REGION) {
		if(client!=null)
			return new DynamoDB(client);
        client = new AmazonDynamoDBClient();
        client.setRegion(Region.getRegion(REGION));
        return new DynamoDB(client);
 }
	
	public static PutItemOutcome persistData(final DynamoDB dynamoDB,final String DYNAMODB_TABLE_NAME, Item item) 
		      throws ConditionalCheckFailedException {
		        return dynamoDB.getTable(DYNAMODB_TABLE_NAME)
		          .putItem(
		            new PutItemSpec().withItem(item));
		            
		 }
}
