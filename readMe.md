# expat journal documentation

## Base Url:
https://grub-grub-backend.herokuapp.com/

## POST to /api/auth/register expects:
```
{
  "username": "username",
  "password": "password"
}
```


## POST to /api/auth/login expects:
```
{
  "username": "username",
  "password": "password"
}
```


## GET to /api/menu
##### Returns all menu items


## GET to /api/menu/:id
##### id of the menu you want
##### Returns item linked to that item id

## GET to /api/menu/:id/menu-items
##### id of the user you want to get all items from
##### returns all of that user's items


## POST to /api/menu
expects:

```
{
  "title": "title",
  "category": "breakfast || lunch || dinner",
  "description": "description",
  "itemImage": "itemImage",
  "price": "$8.00"
}
```
## title, category, description, price is REQUIRED


## PUT to /api/menu/:id
##### id must be the menu id
expects:
```
{
  "title": "title",
  "category": "breakfast || lunch || dinner",
  "description": "description",
  "itemImage": "itemImage",
  "price": "$8.00"
}
```
## title, location, description, price is REQUIRED


## DELETE to /api/menu/id
##### id must be the menu id