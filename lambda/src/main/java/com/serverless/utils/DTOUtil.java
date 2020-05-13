package com.serverless.utils;

import org.json.JSONObject;

public class DTOUtil {
	public static final String API_OBJECT_URL = "https://api.popcorntales.com/image?object=";
	public static String getMessage(String message) {
		JSONObject obj = new JSONObject();
		obj.put("message", message);
		return obj.toString();
	}
}
