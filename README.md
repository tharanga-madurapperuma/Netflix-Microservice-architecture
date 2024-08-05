<h1>1. Introduction</h1>
<br>
<h2>1.1 Overview</h3>
Welcome to the “MTFLIX” Streaming Service Application Programming Interface (API) which is same as “NETFLIX”. This API provides access to key features of our streaming platform, enabling seamless integration and management of content, user information, reviews, and notifications.
<br>
Our API is structured around four main services:
  <ul>
    <li>Content Service: Manage movies, TV series, and documentaries.</li>
    <li>User Service: Handle user registration, authentication, and user-related information.</li>
    <li>Review Service: Manage user reviews and ratings for content.</li>
    <li>Mail Service: Automatically send emails upon user registration and notify all registered users when new content is added.</li>
  </ul>


This documentation will guide you through the available endpoints, request and response formats, and usage examples to help you effectively interact with our platform.
<br><br>
<h3>1.2 Base URL</h3>	
Here are the Base URL for all API end points. You can GET, POST or DELETE data easily using this URL.
<br>
**http://localhost/8081**

<br><br><br>
<h1>2. Authentication</h1>

2.1 Authentication Method
	There is no API key to access this API end points. You can easily get all data using relevant links with base URL.

2.2 How to Obtain Credentials
There are no special credentials to obtained like API key requests, because there is no security on our API service.





















<h1>3. Services Overview</h1>

3.1 List of Services

Content Service
The Content Service allows you to manage the various types of content available on the platform, including movies, TV series, and documentaries. This service provides endpoints to create, retrieve, update, and delete content, ensuring that the content catalog is always up-to-date and accurate.

User Service
The User Service handles all aspects of user management, including registration, authentication, and retrieval of user details. This service ensures secure and efficient management of user data, allowing users to register, log in, and maintain their profiles on the platform.

Review Service
The Review Service enables users to rate and review content on the platform. This service provides endpoints to add, update, and delete reviews, as well as to retrieve all reviews for specific content. By leveraging this service, users can share their opinions and help others discover great content.

Mail Service
The Mail Service is responsible for sending notifications via email. It performs two primary functions.
•	User Registration: Sends a welcome email to users when they register on the platform.
•	Content Notifications: Notifies all registered users when new content (movies, TV series, or documentaries) is added to the platform.
This service ensures that users stay informed about new additions to the content catalogue and remain engaged with the platform.



<h1>4. Endpoint Documentation</h1>

4.1 Content Service

4.1.1 Add Movie

4.1.1.1 End point
•	Endpoint: “http://localhost:8081/addMovie”
•	HTTP Method: “POST”

4.1.1.2 Request Body Parameters
•	name			(String): The name of the movie.
•	overview 		(String): A brief description of the movie.
•	genres 			(Array of Strings): Genres associated with the movie.
•	backdrop_path 	(String): Path to the backdrop image.
•	poster_path 		(String): Path to the poster image.
•	adult 			(Boolean): Indicates if the movie is for adults.
•	original_language 	(String): The original language of the movie.
•	release_date 		(String): The release date of the movie.
•	vote_average 		(Float): The average vote rating.
•	trailer 			(String): URL to the trailer.
•	watch_time 		(Integer): Watch time in minutes.

4.1.1.3 Request Example

{
      "adult": false,
      "backdrop_path": "planetApes",
      "genres": [
                "Science Fiction",
                "Adventure",
                "Action"
                ],
       "original_language": "English",
       "overview": "Several generations following Caesar's reign, apes – now the dominant species – live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all he's known about the past and to make choices that will define a future for apes and humans alike.",
        "poster_path": "planetApesPoster",
        "release_date": "2024-05-08",
        "name": "Kingdom of the Planet of the Apes",
        "vote_average": 6.994,
        "watch_time": "112",
        "trailer":"https://www.youtube.com/embed/XtFI7SNtVpY?si=cvxRUiy8YrDK3QV0"
 }



4.1.1.4 Response Example
 




4.1.2 Get All Movies

4.1.2.1 End point
•	Endpoint: “http://localhost:8081/getAllMovies”
•	HTTP Method: “GET”

4.1.2.2 Request Body Parameters
	Doesn’t require a body.

4.1.2.3 Request Example
	Doesn’t require a body.

4.1.2.4 Response Example
 
This continues until the movie list ended.


4.1.3 Get Movie By Id

4.1.3.1 End point
•	Endpoint: “http://localhost:8081/getMovieById/{movie_id}”
•	HTTP Method: “GET”

4.1.3.2 Request Body Parameters
	Doesn’t require a body.

4.1.3.3 Request Example
	Doesn’t require a body.



4.1.3.4 Response Example
 



4.1.4 Add TV Series

4.1.4.1 End point
•	Endpoint: “http://localhost:8081/addSeries”
•	HTTP Method: “POST”

4.1.4.2 Request Body Parameters
•	name			(String): The name of the TV Series.
•	overview 		(String): A brief description of the TV Series.
•	genres 			(Array of Strings): Genres associated with the TV Series.
•	backdrop_path 	(String): Path to the backdrop image.
•	poster_path 		(String): Path to the poster image.
•	adult 			(Boolean): Indicates if the movie is for adults.
•	original_language 	(String): The original language of the TV Series.
•	release_date 		(String): The release date of the TV Series.
•	vote_average 		(Float): The average vote rating.
•	trailer 			(String): URL to the trailer.
•	num_of_seasons	(Integer): number of seasons.
•	num_of_episodes 	(Integer): number of episodes.




4.1.4.3 Request Example
 

4.1.4.4 Response Example
 



4.1.5 Get All Series

4.1.5.1 End point
•	Endpoint: “http://localhost:8081/getAllSeries”
•	HTTP Method: “GET”

4.1.5.2 Request Body Parameters
	Doesn’t require a body.

4.1.5.3 Request Example
	Doesn’t require a body.

4.1.5.4 Response Example
 
This continues until the movie list ended.


4.1.6 Get Series By Id

4.1.6.1 End point
•	Endpoint: “http://localhost:8081/getSeriesById/{series_id}”
•	HTTP Method: “GET”

4.1.6.2 Request Body Parameters
	Doesn’t require a body.

4.1.6.3 Request Example
	Doesn’t require a body.



4.1.6.4 Response Example
 






4.1.7 Add Documentary

4.1.7.1 End point
•	Endpoint: “http://localhost:8081/addDoc”
•	HTTP Method: “POST”

4.1.7.2 Request Body Parameters
•	name			(String): The name of the Documentary.
•	overview 		(String): A brief description of the Documentary.
•	genres 			(Array of Strings): Genres associated with the Documentary.
•	backdrop_path 	(String): Path to the backdrop image.
•	poster_path 		(String): Path to the poster image.
•	adult 			(Boolean): Indicates if the movie is for adults.
•	original_language 	(String): The original language of the Documentary.
•	release_date 		(String): The release date of the Documentary.
•	vote_average 		(Float): The average vote rating.
•	trailer 			(String): URL to the trailer.
•	watch_time 		(Integer): Watch time in minutes.

4.1.7.3 Request Example
 


4.1.7.4 Response Example
 



4.1.8 Get All Documentaries

4.1.8.1 End point
•	Endpoint: “http://localhost:8081/getAllDoc”
•	HTTP Method: “GET”

4.1.8.2 Request Body Parameters
	Doesn’t require a body.

4.1.8.3 Request Example
	Doesn’t require a body.

4.1.8.4 Response Example
 
This continues until the movie list ended.


4.1.3 Get Documentary By Id

4.1.3.1 End point
•	Endpoint: “http://localhost:8081/getDocById/{movie_id}”
•	HTTP Method: “GET”

4.1.3.2 Request Body Parameters
	Doesn’t require a body.

4.1.3.3 Request Example
	Doesn’t require a body.



4.1.3.4 Response Example
 






















4.2 User Service

4.2.1 Add General User

4.2.1.1 End point
•	Endpoint: “http://localhost:8081/addGuser”
•	HTTP Method: “POST”

4.2.1.2 Request Body Parameters
•	name			(String): The name of user.
•	email 			(String): Email of the user.
•	password 		(Array of Strings): User entered password.

4.2.1.3 Request Example
 

4.2.1.3 Response Example
 


4.2.2 Get All General Users

4.2.2.1 End point
•	Endpoint: “http://localhost:8081/getAllGuser”
•	HTTP Method: “GET”
4.2.2.2 Response Example
 





4.2.3 Get User By Id

4.2.3.1 End point
•	Endpoint: “http://localhost:8081/getGUserById/{id}”
•	HTTP Method: “GET”

4.2.3.2 Response Example
 





4.2.4 Get User By Email

4.2.4.1 End point
•	Endpoint: “http://localhost:8081/getGUserByEmail/{email}”
•	HTTP Method: “GET”

4.2.4.2 Response Example
 


4.2.4 Get All Admin Users

4.2.4.1 End point
•	Endpoint: “http://localhost:8081/getAllAdmin”
•	HTTP Method: “GET”

4.2.4.2 Response Example
 







4.3 Review Service

4.3.1 Add Review

4.3.1.1 End point
•	Endpoint: “http://localhost:8081/addReview”
•	HTTP Method: “POST”

4.3.1.2 Request Body Parameters
•	user_id			(String): user id of the user logged user.
•	contenId 		(String):user clicked content id.
•	reviewText 		(Array of Strings): entered review by user

4.3.1.3 Request Example
 

4.3.1.3 Response Example
 



4.3.2 Get All Review

4.3.2.1 End point
•	Endpoint: “http://localhost:8081/getAllReview”
•	HTTP Method: “GET”
4.3.2.2 Request Body Parameters
4.3.2.3 Request Example

4.3.2.4 Response Example
 


4.3.3 Get Review By Content Id

4.3.2.1 End point
•	Endpoint: “http://localhost:8081/getReviewByContent/{contentId}”
•	HTTP Method: “GET”
4.3.2.2 Request Body Parameters
4.3.2.3 Request Example

4.3.2.4 Response Example
 
4.4 Mail Service

4.4.1 Send Registration Mail

4.4.1.1 End point
•	Endpoint: “http://localhost:8081/registration/{receiverMail}”
•	HTTP Method: “POST”

4.4.1.2 Request Body Parameters
•	name			(String): name of the user.
•	subject 		(String): subject for the mail.

4.4.1.3 Request Example
 

4.4.1.4 Response Example
 





4.4.2 Send Content Update Mail

4.4.2.1 End point
•	Endpoint: “http://localhost:8081/contentUpdate/{receiverMail}”
•	HTTP Method: “POST”

4.4.2.2 Request Body Parameters
•	name			(String): name of the user.
•	subject 		(String): subject for the mail.
•	nameContent 		(String): name of the content (movie name, series name).
•	content 		(String): content type (movie, documentary, TV series).
•	overview 		(String): overview for content.
•	original_language	(String): speaking language of the content.
•	release_date 		(String): content release date.
•	vote_average		(double): votes for the content.
•	trailer			(String): you tube trailer of the content.

4.4.2.3 Request Example
 

4.4.2.4 Response Example
 



