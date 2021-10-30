### CHECKLIST ###

## DATABASE
[x] Create database `"prime_feedback"`
[x] copy paste execute `data.sql`

## BASIC CLIENT HTML JSX
[]Create Components
    [x]Home?
    [x]Feeling
        [x]Header
    [x]Understanding
        [x]Header
    [x]Support
        [x]Header
    [x]Comments
        [x]Header
    [x]Review
    [x]Submitted
    []Admin (STRETCH)
        []Admin Table
            []Admin Data

[x]Home?
[x]Feeling, Understanding, Support, Comments
    [x]Header
    [x]Input
    [x]Button
[x]Review
    [x]text showing scores
    [x]button
[x]Submitted
    [x]Thank you text
    [x]Button
[]Admin (STRETCH)
    []feedback results text
    []Table
        []data
        []delete btn


## SERVER - ROUTE - CRUD
[x]create route `/feedback`
[x]export route to server.js / import route
[x]POST request for submit
    [x]INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    [x]feedback.feeling, 
        feedback.understanding, 
        feedback.support, 
        feedback.comments
[]GET request for admin (STRETCH)
    []store response.rows in local state
    [].map render
[]DELETE request for admin (STRETCH)

## INDEX JS
[x]feedback reducer as object
    const feedback = {
        feeling:
        understanding:
        support:
        comments:
    }
[x] return {...state, action.payload}

## FUNCTIONALITIES
[x]react-router-dom create paths
[x]Home?
    [x]onClick - history.push() move to Feeling component
[x]Feeling, Understanding, Support, Comments
    [x]onClick - dispatch payload.``
    [x] history.push
    [x]input validation -> cannot go next if empty
[x]Review
    [x]useSelector feedback and display
    [x]onClick -> post with feedback object
    [x] history.push
[x]Submitted
    [x]buttn to go home screen
    [x]history.push