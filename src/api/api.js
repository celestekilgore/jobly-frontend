const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  
  static token = "";

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const { error } = await resp.json();

      if (Array.isArray(error.message)) {
        throw error.message;
      }
      else {
        console.log(error.message);
        throw [error.message];
      }

    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details for all companies or for company(s) matching searched term. */

  static async getCompanies(term = '') {
    const data = term ? { nameLike: term } : '';
    let res = await this.request(`companies`, data, "GET");
    return res.companies;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details for all jobs or for job(s) matching searched term. */

  static async getJobs(term = '') {
    const data = term ? { title: term } : '';
    let res = await this.request(`jobs`, data, "GET");
    return res.jobs;
  }


  /** Get user's token which can be used to authenticate further requests.
   *
   * Accepts loginInfo like {username, password}
   * Returns JWT
  */

  static async getLoginToken(loginInfo) {
    const res = await this.request(`auth/token`, loginInfo, "POST");
    return res.token;
  }

  /** Register new user and get user's token which can be used to authenticate
   * further requests.
   *
   * Accepts registration info like
   * {username, password, firstName, lastName, email}
   * Returns JWT
  */

  static async getRegisterToken(registrationInfo) {
    const res = await this.request(`auth/register`, registrationInfo, "POST");
    return res.token;
  }

  /** Get all information about a specific user by username
   *
   * Takes in username
   *
   * Returns
   *  { username, firstName, lastName, email, isAdmin, applications }

  */

  static async getUserData(username) {
    const res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Update a user
   *
   * Takes in data like { username, firstName, lastName, email }
   *
   * Returns
   *  { username, firstName, lastName, email, isAdmin }

  */

  static async updateUserData({ username, firstName, lastName, email }) {
    const res = await this.request(
      `users/${username}`,
      { firstName, lastName, email },
      "PATCH"
    );
    return res.user;
  }

}

export { JoblyApi };