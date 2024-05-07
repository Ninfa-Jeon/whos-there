import fetch from "isomorphic-unfetch";

const httpMethods = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
  PATCH: "PATCH",
};

class RemoteError extends Error {
  constructor(data, method, url, statusCode) {
    super(
      `Error from remote server for ${method} ${url}, status code: ${statusCode}`
    );
    this.name = "RemoteError";
    this.method = method;
    this.url = url;
    this.remoteResponse = data;
  }
}

const parseReponseBody = (response, bodyType) => {
  switch (bodyType) {
    case "json":
      return response.json();
    case "text":
      return response.text();
    case "formData":
      return response.formData();
    case "blob":
      return response.blob();
    case "arrayBuffer":
      return response.arrayBuffer();
    default:
      return response.json();
  }
};

const makeCall = async (url, method, reqBody, bodyType = "json") => {
  try {
    const response = await fetch(url, {
      method,
      body: reqBody ? JSON.stringify(reqBody) : undefined,
    });

    const statusCode = response?.status || "";
    // handling 204 HTTP code - "No Content"
    const data =
      response.status !== 204 ? await parseReponseBody(response, bodyType) : {};

    if (response.ok) {
      return { error: undefined, data, statusCode };
    }

    const errorOrData = response.statusText || data;
    return { error: errorOrData, data, statusCode };
  } catch (error) {
    return {
      error,
      data: undefined,
      statusCode: error.status || 500,
    };
  }
};

const httpService = {
  get(url) {
    return makeCall(url, httpMethods.GET);
  },
};

export default httpService;
