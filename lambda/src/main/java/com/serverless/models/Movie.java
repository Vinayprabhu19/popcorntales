package com.serverless.models;

import org.json.JSONArray;

import com.amazonaws.services.dynamodbv2.document.Item;
import com.serverless.utils.DTOUtil;

public class Movie {
	
    private String title;
    private String language;
    private String titleImage;
    private String coverImage;
    private String year;
    private Float rating;
    private JSONArray genre;
    private String timeStamp;
    
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getCoverImage() {
		return coverImage;
	}
	public void setCoverImage(String coverImage) {
		this.coverImage = coverImage;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getTitleImage() {
		return  DTOUtil.API_OBJECT_URL+titleImage;
	}
	public void setTitleImage(String titleImage) {
		this.titleImage = titleImage;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public Float getRating() {
		return rating;
	}
	public void setRating(Float rating) {
		this.rating = rating;
	}
	public JSONArray getGenre() {
		return genre;
	}
	public void setGenre(JSONArray genre) {
		this.genre = genre;
	}
	public String getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(String timeStamp) {
		this.timeStamp = timeStamp;
	}
	public Item getItem() {
    	Item item = new Item();
    	item.with("title", this.title);
    	item.with("language", this.language);
    	item.with("titleImage", this.titleImage);
    	item.with("coverImage", this.coverImage);
    	item.with("rating", this.rating);
    	item.with("year", this.year);
    	item.with("genre", this.genre.toList());
    	item.with("timeStamp", this.timeStamp);
    	
    	return item;
    }
 
}