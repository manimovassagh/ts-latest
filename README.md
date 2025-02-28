# TS-Latest Project

This project is a TypeScript-based application that includes a booking system. The booking system allows users to create and retrieve bookings using a RESTful API.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- PostgreSQL (or any other supported database)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ts-latest.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ts-latest
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:
```
DATABASE_URL=your_database_url
PORT=3000
```

## Usage

### Booking Router

The booking router provides endpoints to create and retrieve bookings.

#### Endpoints

- `GET /api/bookings`: Retrieve all bookings.
- `POST /api/bookings`: Create a new booking.

#### Example

To create a new booking, send a POST request to `/api/bookings` with the following JSON body:
```json
{
  "startDate": "2023-10-01",
  "endDate": "2023-10-10",
  "userId": 1,
  "propertyId": 1
}
```

To retrieve all bookings, send a GET request to `/api/bookings`.

## Running the Application

1. Start the development server:
    ```bash
    npm run dev
    ```
2. The application will be available at `http://localhost:3000`.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
