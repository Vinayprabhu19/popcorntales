package com.serverless.models;

import org.json.JSONArray;

import com.amazonaws.services.dynamodbv2.document.Item;

public class Movie {
	
    private String title;
    private String language;
    private String titleImage;
    private String year;
    private String rating;
    private JSONArray genre;
    
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getTitleImage() {
		return titleImage;
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
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public JSONArray getGenre() {
		return genre;
	}
	public void setGenre(JSONArray genre) {
		this.genre = genre;
	}
    
    public Item getItem() {
    	Item item = new Item();
    	item.with("title", this.title);
    	item.with("language", this.language);
    	item.with("titleImage", this.titleImage);
    	item.with("rating", this.rating);
    	item.with("year", this.year);
    	item.with("genre", this.genre.toList());
    	return item;
    }
 
}