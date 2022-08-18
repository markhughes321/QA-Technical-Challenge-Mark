@ConduitApp

Feature: Users can log in, create new posts and follow other profiles

Background:
  * User has an account created
  * User is on the Conduit Homepage

@LogIn
Scenario Outline: Users can log in
  Given the user navigates to the "Sign In" page
  When the user enters valid <credentials>
  And clicks the 'Sign in' button
  Then the user will be redirected to the "Your Feed" page

  Examples: 
    | credentials   |
    | email         |
    | password      |

@CreatePost
Scenario Outline: Users can create a post
  Given the user is logged in
  And they navigate to the "New Post" page
  When the user enters the article <atrributes>
  And clicks the "Publish Article" button
  Then the article will be visible on the "Global Feed" page

  Examples: 
    | atrributes  |
    | title       |
    | subtitle    |
    | description |
    | tag         |

@FollowProfile
Scenario: Users can follow other profiles
  Given the user is logged in
  And they navigate to the "Global Feed" page
  When the user clicks on a username
  And clicks the "Follow" button
  Then the user will see articles on the "Your Feed" page
  And the articles will be from the followed profile