INSERT INTO foodlog (user_id, date, meal, name, foodURI, measure, measureURI, quantity, calories, fat, carbohydrates, protein)
VALUES (${user_id}, ${date}, ${meal}, ${name}, ${foodURI}, ${measure}, ${measureURI}, ${quantity}, ${calories}, ${fat}, ${carbohydrates}, ${protein})
returning *;