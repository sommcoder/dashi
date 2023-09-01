/*
 
Simple REST API structure:

1) Routes take in the initial request
    - Express Route layer
2) Routes pass requests to Controllers
    - 
3) Controller passes to the Service Layer
    - This is out BUSINESS LOGIC
4) Service Layer then "speaks" with our Data
    - Where we work with our data stores
 

BEST PRACTICES:
` API versioning:
    create different paths: /api/v1/tables and /api/v2/tables


*/
