package com.serverless.models;

import org.json.JSONArray;

public class ReviewDetail {

	private String title;
	private String language;
	private String titleImage;
	private String year;
	private String rating;
	private JSONArray genre;
	private Review review;
	private JSONArray cast;
	
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
	
}
