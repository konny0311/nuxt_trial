insert into technology (technology) values ('Python'), 
																					 ('Java Script'),
																					 ('Java'),
																					 ('AWS'),
																					 ('OpenCV'),
																					 ('TensorFlow'),
																					 ('Keras'),
																					 ('Ubuntu');
insert into project (name, summary, url) values ('Expiry date recognition',
																						'Read expiry date on a card box using Google Cloud Vision from an image.',
																						'https://github.com/konny0311/nuxt_trial');
insert into project_tech (project_id, technology_id) values (1, 3),
																														(1, 4),
																														(1, 5);