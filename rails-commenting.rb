# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb


# 1) The BlogPostsController class inherits from ApplicationController which inherits from its ::Base class
class BlogPostsController < ApplicationController
  def index
    # 2) This method will be used to show all records from the BlogPost model. It will include all rows and columns. All BlogPost records are stored within an instance variable called posts. The http request is GET.
    @posts = BlogPost.all
  end

  def show
    # 3) This method is used to display one record at a time based off the params of id. The single record is stored in an instance variable called post. The http request is GET.
    @post = BlogPost.find(params[:id])
  end

  # 4) The new method is used in conjunction with the create method to generate a form created in view. The form is created in a file that corresponds to the new method (new.html.erb) and the http request is GET.
  def new
  end

  def create
    # 5) This method stores the creation of a single record in an instance variable called post. The whitelisted column names are stored in blog_post_params and it's passed into the create method as an argument.

    # Using the if statement to check for validations and if it passes, the user will be redirected to the newly created record's view. If it doesn't pass, then the new method is rerendered and the user can try to create a new record again.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) If the record was not successfully deleted, the user will be redirected back to that same record's view.
      redirect_to blog_post_path(@post)
    end
  end

  # 7) The following is mainly used for security reasons. Unauthorized users cannot change access or role permissions.
  private
  def blog_post_params
    # 8) This method requires that the BlogPost model have at least a title and content column filled out.
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) BlogPost inherits from Application Record
class BlogPost < ApplicationRecord
  # 10) One BlogPost record can have multiple comment records. The Comment model will have a foreign key that corresponds to the primary key of the BlogPost record that it was generated from.
  has_many :comments
end
