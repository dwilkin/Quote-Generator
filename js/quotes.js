// Once I found a good source for cited quotes (https://en.wikiquote.org/wiki/Main_Page) it was actually harder
// to find quotes without a source.  But I tried to get a good mix of quotes with and without citations, as well
// as some with just the citation and no date to showcase ability of the program to display only the relevant info.
// I couldn't really find any quotes with a date but no citation, typically you only get a date because you have a source.
var quotes = [
  {
    quote: "This above all: to thine own self be true",
    source: "William Shakespeare",
    citation: "Hamlet, Act I, Scene III",
    year: 1603,
    tags: ["shakespeare", "art"]
  },
  {
    quote: "Brevity is the soul of wit",
    source: "William Shakespeare",
    citation: "Hamlet, Act II, Scene II",
    year: 1603,
    tags: ["shakespeare", "art", "wit"]
  },
  {
    quote: "All the world 's a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts",
    source: "William Shakespeare",
    citation: "As You Like It, Act II, Scene VII",
    year: 1599,
    tags: ["shakespeare", "art", "life"]
  },
  {
    quote: "The fool doth think he is wise, but the wise man knows himself to be a fool",
    source: "William Shakespeare",
    citation: "As You Like It, Act V, Scene I",
    year: 1599,
    tags: ["shakespeare", "art", "wisdom"]
  },
  {
    quote: "A horse! a horse! my kingdom for a horse!",
    source: "William Shakespeare",
    citation: "King Richard III, Act V, Scene IV",
    year: 1591,
    tags: ["shakespeare", "art", "need"]
  },
  {
    quote: "What's in a name? That which we call a rose by any other name would smell as sweet",
    source: "William Shakespeare",
    citation: "Romeo and Juliet, Act II, Scene II",
    year: 1595,
    tags: ["shakespeare", "art"]
  },
  {
    quote: "Tempt not a desperate man",
    source: "William Shakespeare",
    citation: "Romeo and Juliet, Act V, Scene III",
    year: 1595,
    tags: ["shakespeare", "art", "desperation"]
  },
  {
    quote: "If you prick us, do we not bleed? if you tickle us, do we not laugh? if you poison us, do we not die? and if you wrong us, shall we not revenge?",
    source: "William Shakespeare",
    citation: "The Merchant of Venice, Act III, Scene I",
    year: 1596,
    tags: ["shakespeare", "art"]
  },
  {
    quote: "The devil can cite Scripture for his purpose",
    source: "William Shakespeare",
    citation: "The Merchant of Venice, Act I, Scene III",
    year: 1596,
    tags: ["shakespeare", "art", "religion"]
  },
  {
    quote: "Some rise by sin, and some by virtue fall",
    source: "William Shakespeare",
    citation: "Measure for Measure, Act II, Scene I",
    year: 1623,
    tags: ["shakespeare", "art", "virtue", "cynicism"]
  },
  {
    quote: "The better part of valour is discretion",
    source: "William Shakespeare",
    citation: "King Henry IV, Part I, Act V, Scene IV",
    year: 1596,
    tags: ["shakespeare", "art", "modesty"]
  },
  {
    quote: "Don't cry because it's over, smile because it happened",
    source: "Dr. Seuss",
    tags: ["sad", "hopeful"]
  },
  {
    quote: "Adults are just obsolete children and the hell with them",
    source: "Dr. Seuss",
    citation: "Of Sneetches and Whos and the Good Dr. Seuss: Essays on the Writings and Life of Theodor Geisel",
    year: 1997,
    tags: ["adulthood", "childhood"]
  },
  {
    quote: "UNLESS someone like you cares a whole awful lot, nothing is going to get better. It's not.",
    source: "Dr. Seuss",
    citation: "The Lorax",
    year: 1971,
    tags: ["cynical", "motivational", "poetry"]
  },
  {
    quote: "You oughta be thankful, a whole heaping lot, for the places and people you're lucky you're not!",
    source: "Dr. Seuss",
    citation: "Did I Ever Tell You How Lucky You Are?",
    year: 1973,
    tags: ["motivational", "optimism", "gratitude", "luck"]
  },
  {
    quote: "Those who mind don't matter, and those who matter don't mind",
    source: "Bernard Baruch",
    citation: "When asked about seating arrangements at dinner parties",
    tags: ["motivational", "optimism", "opinions"]
  },
  {
    quote: "Be yourself; everyone else is already taken",
    source: "Oscar Wilde",
    tags: ["motivational", "inspirational"]
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    source: "Albert Einstein",
    tags: ["intelligence", "stupidity", "science"]
  },
  {
    quote: "You only live once, but if you do it right, once is enough",
    source: "Mae West",
    tags: ["life", "motivational"]
  },
  {
    quote: "Be the change that you wish to see in the world",
    source: "Mahatma Gandhi",
    tags: ["motivational", "inspirational"]
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on",
    source: "Robert Frost",
    tags: ["life", "inspirational"]
  },
  {
    quote: "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .'",
    source: "Robert Frost",
    citation: "The Four Loves",
    tags: ["friendship"]
  },
  {
    quote: "No one can make you feel inferior without your consent",
    source: "Eleanor Roosevelt",
    citation: "This is My Story",
    tags: ["resilience"]
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much",
    source: "Oscar Wilde",
    tags: ["enemies", "forgiveness", "funny"]
  },
  {
    quote: "Insanity is doing the same thing, over and over again, but expecting different results",
    source: "Narcotics Anonymous",
    tags: ["insanity", "motivational"]
  },
  {
    quote: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid",
    source: "Jane Austen",
    citation: "Northanger Abbey",
    year: 1817
    tags: ["intelligence", "stupidity", "books"]
  },
  {
    quote: "Life is what happens to us while we are making other plans",
    source: "Allen Saunders",
    tags: ["life", "motivational"]
  },
  {
    quote: "A woman is like a tea bag; you never know how strong it is until it's in hot water",
    source: "Eleanor Roosevelt",
    tags: ["women", "resilience"]
  },
  {
    quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present",
    source: "Bil Keane",
    tags: ["inspirational", "motivational", "life"]
  },
  {
    quote: "The man who does not read has no advantage over the man who cannot read",
    source: "Mark Twain",
    tags: ["books", "intelligence", "opportunity"]
  },
  {
    quote: "I have not failed. I've just found 10,000 ways not to make a lightbulb",
    source: "Thomas Edison",
    tags: ["failure", "optimism", "inspirational"]
  },
  {
    quote: "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference",
    source: "Elie Wiesel",
    tags: ["life", "love", "indifference", "art", "hate", "ugliness", "faith", "heresy"]
  },
  {
    quote: "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read",
    source: "Groucho Marx",
    citation: "The Essential Groucho: Writings For By And About Groucho Marx",
    tags: ["life", "love", "indifference", "art", "hate", "ugliness", "faith", "heresy"]
  },
]
