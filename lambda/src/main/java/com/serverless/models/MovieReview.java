package com.serverless.models;

import org.json.JSONArray;
import org.json.JSONObject;

import com.amazonaws.services.dynamodbv2.document.Item;

public class MovieReview {

	private String title;
	private String language;
	private String titleImage;
	private String year;
	private JSONArray genre;
	private Review review;
	private Float rating;
	private JSONArray cast;
	private String trailer;
	private String ticketImage;
	private String watchDate;
	private String placeWatched;
	
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
	public Review getReview() {
		return review;
	}
	public void setReview(Review review) {
		this.review = review;
	}
	public JSONArray getCast() {
		return cast;
	}
	public void setCast(JSONArray cast) {
		this.cast = cast;
	}
	public String getTrailer() {
		return trailer;
	}
	public void setTrailer(String trailer) {
		this.trailer = trailer;
	}
	
	public String getTicketImage() {
		return ticketImage;
	}
	public void setTicketImage(String ticketImage) {
		this.ticketImage = ticketImage;
	}
	public String getWatchDate() {
		return watchDate;
	}
	public void setWatchDate(String watchDate) {
		this.watchDate = watchDate;
	}
	public String getPlaceWatched() {
		return placeWatched;
	}
	public void setPlaceWatched(String placeWatched) {
		this.placeWatched = placeWatched;
	}
	public Item getItem() {
    	Item item = new Item();
    	item.with("title", this.title);
    	item.with("language", this.language);
    	item.with("titleImage", this.titleImage);
    	item.with("rating", this.rating);
    	item.with("year", this.year);
    	item.with("genre", this.genre.toList());
    	item.with("review", new JSONObject(review).toString());
    	item.with("cast",this.cast.toList());
    	item.with("trailer", this.trailer);
    	JSONObject ticketDetails = new JSONObject();
    	ticketDetails.put("ticketImage", this.ticketImage);
    	ticketDetails.put("placeWatched", this.placeWatched);
    	ticketDetails.put("watchDate", this.watchDate);
    	item.with("ticketDetails", ticketDetails.toString());
    	return item;
    }
}
