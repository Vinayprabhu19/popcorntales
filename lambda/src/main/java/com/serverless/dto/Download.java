package com.serverless.dto;

import org.json.JSONArray;

import com.amazonaws.services.dynamodbv2.document.Item;
import com.serverless.utils.DTOUtil;

public class Download {
	
    private String timeStamp;
    private String title;
    
	
	public String getTimeStamp() {
		return timeStamp;
	}


	public void setTimeStamp(String timeStamp) {
		this.timeStamp = timeStamp;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public Item getItem() {
    	Item item = new Item();
    	item.with("title", this.title);
    	item.with("timeStamp", timeStamp);
    	return item;
    }
 
}