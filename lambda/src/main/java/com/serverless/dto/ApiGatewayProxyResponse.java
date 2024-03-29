package com.serverless.dto;

import java.util.HashMap;
import java.util.Map;

public class ApiGatewayProxyResponse {
    private int statusCode;
    private Map<String, String> headers;
    private String body;
    private boolean isBase64Encoded;

    public ApiGatewayProxyResponse() {
    		this.headers = new HashMap<String, String>();
    		this.headers.put("Access-Control-Allow-Origin", "*");
    		this.headers.put("Access-Control-Allow-Headers","*");
    		this.headers.put("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
    }

    public int getStatusCode() {
        return statusCode;
    }

    public Map<String, String> getHeaders() {
        return headers;
    }

    public void addHeader(String key,String value) {
    	this.headers.put(key, value);
    }
    public String getBody() {
        return body;
    }
    

    public boolean getIsBase64Encoded() {
        return isBase64Encoded;
    }

    private ApiGatewayProxyResponse(int statusCode, Map<String, String> headers, String body, boolean isBase64Encoded) {
        this.statusCode = statusCode;
        this.headers = headers;
        this.body = body;
        this.isBase64Encoded = isBase64Encoded;
    }

    public ApiGatewayProxyResponseBuilder builder() {
        return new ApiGatewayProxyResponseBuilder()
                .withStatusCode(this.getStatusCode())
                .withHeaders(this.getHeaders())
                .withBody(this.getBody())
                .withBase64Encoded(this.getIsBase64Encoded());
    }

    public static class ApiGatewayProxyResponseBuilder {
        private int statusCode = 0;
        private Map<String, String> headers = new HashMap<>();
        private String body = "";
        private boolean isBase64Encoded = false;

        public ApiGatewayProxyResponseBuilder withStatusCode(int statusCode) {
            this.statusCode = statusCode;
            return this;
        }

        public ApiGatewayProxyResponseBuilder withHeaders(Map<String, String> headers) {
            this.headers = headers;
            return this;
        }

        public ApiGatewayProxyResponseBuilder withBody(String body) {
            this.body = body;
            return this;
        }

        public ApiGatewayProxyResponseBuilder withBase64Encoded(boolean base64Encoded) {
            isBase64Encoded = base64Encoded;
            return this;
        }

        public ApiGatewayProxyResponse build() {
            return new ApiGatewayProxyResponse(statusCode, headers, body, isBase64Encoded);
        }
    }

    
    public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public void setHeaders(Map<String, String> headers) {
		this.headers = headers;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public void setBase64Encoded(boolean isBase64Encoded) {
		this.isBase64Encoded = isBase64Encoded;
	}

	@Override
    public String toString() {
        return "ApiGatewayProxyResponse{" +
                "statusCode=" + statusCode +
                ", headers=" + headers +
                ", body='" + body + '\'' +
                ", isBase64Encoded=" + isBase64Encoded +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ApiGatewayProxyResponse)) return false;

        ApiGatewayProxyResponse response = (ApiGatewayProxyResponse) o;

        if (statusCode != response.statusCode) return false;
        if (isBase64Encoded != response.isBase64Encoded) return false;
        if (headers != null ? !headers.equals(response.headers) : response.headers != null) return false;
        return body != null ? body.equals(response.body) : response.body == null;

    }

    @Override
    public int hashCode() {
        int result = statusCode;
        result = 31 * result + (headers != null ? headers.hashCode() : 0);
        result = 31 * result + (body != null ? body.hashCode() : 0);
        result = 31 * result + (isBase64Encoded ? 1 : 0);
        return result;
    }
}