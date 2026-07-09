export const eventTestData = [
  {
    testName: "Conference event",
    createPayload: {
      "title": "AI & Machine Learning Summit",
      "description": "Deep dive into LLMs, RAG, and agentic AI systems.",
      "category": "Conference",
      "venue": "Hyderabad International Convention Centre",
      "city": "Hyderabad",
      "eventDate": "2026-09-20T10:00:00.000Z",
      "price": 2500,
      "totalSeats": 300,
      "imageUrl": "https://example.com/ai-summit-banner.jpg"
    },
    updatePayload: {
      "title": "AI & Machine Learning Summit - Updated",
      "description": "Deep dive into LLMs, RAG, and agentic AI systems.",
      "category": "Conference",
      "venue": "Hyderabad International Convention Centre",
      "city": "Hyderabad",
      "eventDate": "2026-09-20T10:00:00.000Z",
      "price": "2500",
      "totalSeats": 4000,
      "availableSeats": 3000,
      "imageUrl": "https://example.com/ai-summit-banner.jpg"
    }
  },
  {
    testName: "Free meetup event",
    createPayload: {
      "title": "Free Community Meetup",
      "description": "Casual networking event for local developers.",
      "category": "Meetup",
      "venue": "WeWork Koramangala",
      "city": "Bangalore",
      "eventDate": "2026-08-05T18:30:00.000Z",
      "price": 0,
      "totalSeats": 50,
      "imageUrl": "https://example.com/meetup-banner.jpg"
    },
    updatePayload: {
      "title": "Free Community Meetup - Updated",
      "description": "Casual networking event for local developers.",
      "category": "Meetup",
      "venue": "WeWork Koramangala",
      "city": "Bangalore",
      "eventDate": "2026-08-05T18:30:00.000Z",
      "price": "0",
      "totalSeats": 100,
      "availableSeats": 80,
      "imageUrl": "https://example.com/meetup-banner.jpg"
    }
  },
  {
    testName: "Workshop event",
    createPayload: {
      "title": "Startup Pitch Night",
      "description": "Founders pitch to a panel of investors.",
      "category": "Workshop",
      "venue": "IIM Ahmedabad Auditorium",
      "city": "Ahmedabad",
      "eventDate": "2026-11-12T14:00:00.000Z",
      "price": 500,
      "totalSeats": 150,
      "imageUrl": "https://example.com/pitch-night.jpg"
    },
    updatePayload: {
      "title": "Startup Pitch Night - Updated",
      "description": "Founders pitch to a panel of investors.",
      "category": "Workshop",
      "venue": "IIM Ahmedabad Auditorium",
      "city": "Ahmedabad",
      "eventDate": "2026-11-12T14:00:00.000Z",
      "price": "500",
      "totalSeats": 200,
      "availableSeats": 180,
      "imageUrl": "https://example.com/pitch-night.jpg"
    }
  }
];