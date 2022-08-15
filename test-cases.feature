@Conduit

Feature: Manual test cases for Conduit App  

Background: 

Scenario: User can sign up
  Given the user is on the 'Sign Up' page
  When the user enters valid credientials
  Then they can create an account successfully

Scenario: User can't sign up with invalid credientials
  Given the user is on the 'Sign In' page
  When the user enters valid credientials
  Then they can create an account successfully

Scenario Outline: User can create a post
  Given the user is on the 'New Post' page
  When the user creates a new post
  Then it will be visible on the 'Global Feed'

Scenario: User can view posts on Global Feed
  Given the user is on the 'Global Feed' page
  When the user views a post 
  Then the post <atrributes> will be visible

  Examples: 
    | atrributes  |
    | image       |
    | username    |
    | createDate  |
    | title       |
    | subtitle    |
    | read more.. |
    | favourites  |
    | tags        |

Scenario: User can update their personal settings
  Given the user is on the 'Settings' page
  When the user updates their <settings>
  Then they will be updated successfully

  Examples: 
    | settings      |
    | profile photo |
    | username      |
    | bio           |
    | email         |
    | password      |

Scenario: User can view and follow profiles
  Given the user is on the 'Global Feed' page
  When the user clicks on a username
  Then the user will be taken to the profile page
  And they can follow it