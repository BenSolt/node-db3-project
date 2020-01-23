-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
    select ProductName, CategoryName
    from product as p
    join category as c
    on p.CategoryId = c.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
    select CompanyName, o.Id from shipper as s
    join [order] as o
        on s.Id = o.ShipVia
    where orderDate<'2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
 select productname as prod, quantity
    from orderdetail as o
    join product as p
        on o.ProductId = p.Id
    where orderId = 10251
    order by prod asc;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
  select Id, CompanyName, LastName
  from [Order] as o
  join Customer as c
    on c.id = CustomerId  
  join Employee as e
    on e.id = EmployeeId