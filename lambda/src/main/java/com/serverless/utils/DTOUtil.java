package com.serverless.utils;

import org.json.JSONObject;

public class DTOUtil {

	public static String getMessage(String message) {
		JSONObject obj = new JSONObject();
		obj.put("message", message);
		return obj.toString();
	}
}
