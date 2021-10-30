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

[]Home?
[]Feeling, Understanding, Support, Comments
    []Header
    []Input
    []Button
[]Review
    []text showing scores
    []button
[]Submitted
    []Thank you text
    []Button
[]Admin (STRETCH)
    []feedback results text
    []Table
        []data
        []delete btn


## SERVER - ROUTE - CRUD
[]create route `/feedback`
[]export route to server.js / import route
[]POST request for submit
    []INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    []feedback.feeling, 
        feedback.understanding, 
        feedback.support, 
        feedback.comments
[]GET request for admin (STRETCH)
    []store response.rows in local state
    [].map render
[]DELETE request for admin (STRETCH)

## INDEX JS
[]feedback reducer as object
    const feedback = {
        feeling:
        understanding:
        support:
        comments:
    }
[] return {...state, action.payload}

## FUNCTIONALITIES
[]Home?
    []onClick - history.push() move to Feeling component
[]Feeling, Understanding, Support, Comments
    []onClick - dispatch payload.``
    [] history.push
[]Review
    []useSelector feedback and display
    []onClick -> post with feedback object
    [] history.push
[]Submitted
    []buttn to start new feedback
    []history.push