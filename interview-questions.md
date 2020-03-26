# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:

  The name of the foreign key would be `animal_id`.
  The foreign key would be part of the Sighting model.
  Each sighting of an animal would reference back to that animal via the foreign key in the Sighting model. The foreign key's value would be the primary key value of that particular animal in the Animal model.

  A foreign key can have multiple of the same value, but a primary key has to be unique.


  Researched answer:

  Associations are implemented using macro-style calls, so that you can declaratively add features to your models. For example, by declaring that one model `belongs_to` another, you instruct Rails to maintain Primary Key-Foreign Key information between instances of the two models, and you also get a number of utility methods added to your model.

  A `belongs_to` association sets up a one-to-one connection with another model, such that each instance of the declaring model "belongs to" one instance of the other model. In our example, the Sighting model would `belongs_to` the Animal model.

  A `has_many` association indicates a one-to-many connection with another model. You'll often find this association on the "other side" of a `belongs_to` association. This association indicates that each instance of the model has zero or more instances of another model. In our example, it would be that the Animal model `has_many` Sighting records.



2. Which routes must always be passed params and why?

  Your answer:

  When querying for a single record whether it's a GET, PATCH/PUT, or a DELETE http request, a param must be passed. Usually an id so SQL knows which record to retrieve and manipulate if necessary.

  Researched answer:

  `GET /patients/17`
  `match "/patients/:id" => "patients#show"`

  When your Rails application receives an incoming request it asks the router to match it to a controller action. If the first matching route is the request is dispatched to the patients controller’s show action with { :id => “17” } in params.

  Browsers request pages from Rails by making a request for a URL using a specific HTTP method, such as GET, POST, PUT and DELETE. Each method is a request to perform an operation on the resource. A resource route maps a number of related requests to actions in a single controller.


3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:

  GET '/games/:guess' => 'main#game'


4. Name three rails generator commands. What is created by each?

  Your answer:

  `rails g model Game`
  Creates a database model called Game.
  `rails g resource Game`
  Creates a resources route for all methods within the controller as well as a database model called Game.
  `rails g controller Game`
  Creates a controller and a game directory within the views directory.

  Researched answer:

  ```
  $ rails generate controller Greetings hello

     create  app/controllers/greetings_controller.rb
      route  get 'greetings/hello'
     invoke  erb
     create    app/views/greetings
     create    app/views/greetings/hello.html.erb
     invoke  test_unit
     create    test/controllers/greetings_controller_test.rb
     invoke  helper
     create    app/helpers/greetings_helper.rb
     invoke    test_unit
     invoke  assets
     invoke    scss
     create      app/assets/stylesheets/greetings.scss
     ```

  It made sure a bunch of directories were in our application, and created a controller file, a view file, a functional test file, a helper for the view, a JavaScript file, and a stylesheet file.

  ```rails
  $ rails generate scaffold HighScore game:string score:integer

      invoke  active_record
      create    db/migrate/20190416145729_create_high_scores.rb
      create    app/models/high_score.rb
      invoke    test_unit
      create      test/models/high_score_test.rb
      create      test/fixtures/high_scores.yml
      invoke  resource_route
       route    resources :high_scores
      invoke  scaffold_controller
      create    app/controllers/high_scores_controller.rb
      invoke    erb
      create      app/views/high_scores
      create      app/views/high_scores/index.html.erb
      create      app/views/high_scores/edit.html.erb
      create      app/views/high_scores/show.html.erb
      create      app/views/high_scores/new.html.erb
      create      app/views/high_scores/_form.html.erb
      invoke    test_unit
      create      test/controllers/high_scores_controller_test.rb
      create      test/system/high_scores_test.rb
      invoke    helper
      create      app/helpers/high_scores_helper.rb
      invoke      test_unit
      invoke    jbuilder
      create      app/views/high_scores/index.json.jbuilder
      create      app/views/high_scores/show.json.jbuilder
      create      app/views/high_scores/_high_score.json.jbuilder
      invoke  assets
      invoke    scss
      create      app/assets/stylesheets/high_scores.scss
      invoke  scss
      create    app/assets/stylesheets/scaffolds.scss
  ```

  A scaffold in Rails is a full set of model, database migration for that model, controller to manipulate it, views to view and manipulate the data, and a test suite for each of the above.

  The generator checks that there exist the directories for models, controllers, helpers, layouts, functional and unit tests, stylesheets, creates the views, controller, model and database migration for HighScore (creating the high_scores table and fields), takes care of the route for the resource, and new tests for everything.

  The migration requires that we migrate, that is, run some Ruby code (living in that 20130717151933_create_high_scores.rb) to modify the schema of our database.

5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"

- Retrieve all records from the model through the index method.

/users/1      method="GET"

- Retrieve a single record from the model that has an id of 1 from the show method.

/users/new    method="GET"

- Retrieve the form with all its input fields, buttons, etc. from the new.html.erb file through the new method.

/users/       method="POST"

- Creates a record and adds it to the model through the create method.

/users/1      method="PUT"

- Update/edit a single record with the id of 1 through the update method.

/users/1      method="DELETE"

- Delete a single record with the id of 1 through the destroy method.
