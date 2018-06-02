# BookStore

An simple app to manage books.

You can test/use project in http://kiqbookstore.azurewebsites.net/

## Getting Started

### Prerequisites

* .NET Core 2.0
* Node v8.11.1+
* npm or yarn
* Angular CLI


## Running project

### Checkout this repository 

```
git clone https://github.com/kiq7/bookstore
```

### Database setup
Run the script located at `sql/CreateDataBase.sql` on your SQL Server.

### Setup your connection string
On file located at `src\BookStore.API\appsettings.json`, change connection string with your database params.

### Backend 

On the root path, run the following commands:

```
dotnet restore && dotnet run -p src/BookStore.API
```

API will run at http://localhost:5000/

### Frontend

On the root path, run the following commands:

```
cd src/BookStore.Web
npm install or yarn install 
npm start or yarn start 
```

Frontend application will run at http://localhost:4200

## Running the tests

On the root path, run the following command:

```
dotnet test tests/BookStore.Domain.Tests
```


## Built With

* [.NET Core](https://www.microsoft.com/net/learn/get-started/) - DDD, Entity Framework Core, DI, AutoMapper
* [Angular 4](https://angular.io/)
* [Bootstrap 4](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

## Author

* **Kaique Vieira** 

## License

This project is licensed under the MIT License
