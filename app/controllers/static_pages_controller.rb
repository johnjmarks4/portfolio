class StaticPagesController < ApplicationController

  def home
  end

  def about
  end

  def skills
    @skills = ["ruby on rails", "javascript", "mysql",
               "css3", "object-oriented programming",
               "bootstrap", "git", "cs fundamentals",
               "postgresql", "jquery", "html5", "tdd"]
  end

  def my_work
  end

  def contact
  end
end
