package com.serverless.models;

import org.json.JSONArray;

public class Review {

	private String synopsis;
	private JSONArray pros;
	private JSONArray cons;
	
	public String getSynopsis() {
		return synopsis;
	}
	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}
	public JSONArray getPros() {
		return pros;
	}
	public void setPros(JSONArray pros) {
		this.pros = pros;
	}
	public JSONArray getCons() {
		return cons;
	}
	public void setCons(JSONArray cons) {
		this.cons = cons;
	}
	
}
