package com.serverless.models;

import org.json.JSONArray;
import org.json.JSONObject;

import com.amazonaws.services.dynamodbv2.document.Item;
import com.serverless.utils.DTOUtil;

public class MovieReview {

	private String title;
	private String language;
	private String titleImage;
	  private String coverImage;
	private String year;
	private JSONArray genre;
	private Review review;
	private Float rating;
    private Float scriptRating;
    private Float directionRating;
    private Float dialoguesRating;
    private Float cinematographyRating;
    private Float editingRating;
    private Float musicRating;
    private Float actingRating;
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
		this.titleImage =titleImage;
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
		return  DTOUtil.API_OBJECT_URL+ticketImage;
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
	public Float getScriptRating() {
		return scriptRating;
	}
	public void setScriptRating(Float scriptRating) {
		this.scriptRating = scriptRating;
	}
	public Float getDirectionRating() {
		return directionRating;
	}
	public void setDirectionRating(Float directionRating) {
		this.directionRating = directionRating;
	}
	public Float getDialoguesRating() {
		return dialoguesRating;
	}
	public void setDialoguesRating(Float dialoguesRating) {
		this.dialoguesRating = dialoguesRating;
	}
	public Float getCinematographyRating() {
		return cinematographyRating;
	}
	public void setCinematographyRating(Float cinematographyRating) {
		this.cinematographyRating = cinematographyRating;
	}
	public Float getEditingRating() {
		return editingRating;
	}
	public void setEditingRating(Float editingRating) {
		this.editingRating = editingRating;
	}
	public Float getMusicRating() {
		return musicRating;
	}
	public void setMusicRating(Float musicRating) {
		this.musicRating = musicRating;
	}
	
	public Float getActingRating() {
		return actingRating;
	}
	public void setActingRating(Float actingRating) {
		this.actingRating = actingRating;
	}
	public Item getItem() {
    	Item item = new Item();
    	item.with("title", this.title);
    	item.with("language", this.language);
    	item.with("titleImage", this.titleImage);
    	item.with("coverImage", this.coverImage);
    	item.with("rating", this.rating);
    	item.with("scriptRating", this.scriptRating);
    	item.with("directionRating", this.directionRating);
    	item.with("dialoguesRating", this.dialoguesRating);
    	item.with("cinematographyRating", this.cinematographyRating);
    	item.with("editingRating", this.editingRating);
    	item.with("musicRating", this.musicRating);
    	item.with("actingRating", this.actingRating);
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
