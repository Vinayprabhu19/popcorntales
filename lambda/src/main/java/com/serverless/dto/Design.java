package com.serverless.dto;

import org.json.JSONArray;

import com.amazonaws.services.dynamodbv2.document.Item;
import com.serverless.utils.DTOUtil;

public class Design {
	
    private String title;
    private String image;
    
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}


	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Item getItem() {
    	Item item = new Item();
    	item.with("title", this.title);
    	item.with("image", this.image);
    	return item;
    }
 
}