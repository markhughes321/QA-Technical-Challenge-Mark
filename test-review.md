## Test Approach
This is my test approach...

### Bugs
#### User Settings
1. Image is not displaying. It's not clear what the root cause is but it's certainly a backend issue. It seems the 'bio' field is over writing the 'imageUrl' field.

#### User Settings
1. Tags are not diaplyed on new posts. It seems like they are not being saved to the database as the array is empty when looking at the response for the articles returned.

2. Unable to delete an article. 

### Areas for improvements
1. More informative feedback after updating user settings. Currently, the user is taken back to the homepage without being informed that their settings we're updated successfully.

2. Field validation on the orm to prevent unwanted characters being submitted e.g. special characters 