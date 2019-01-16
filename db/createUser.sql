INSERT INTO users (first_name, last_name, email, password, calorie_goal)
VALUES (${firstName}, ${lastName}, ${email}, ${hash}, ${calorieGoal})
RETURNING *;