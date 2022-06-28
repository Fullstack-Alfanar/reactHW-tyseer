<h1 align="center"><u>Shoes Store</u></h1>
<h3>Shoes Store that has some shoes brand , price and size</h3>

<p align="center">
<br>
</p>

### About The Store
Project created with react used:
* javascript: it has 3 pages of javascript : 
    <br>
    - `App page` : in this page i used the parent to import every javascript files in it.

    - `Shoes page` : in this page i build the script of the shoes page.

    - `Clock page` : in this page i build the clock script used there useState and useEffect.

### Clock useEffect:
    ```js
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000);
    }, []);
    ```

### How to use 
* `` use the deploy ``
* `` use this link`` => [link of the proj]()

## Install
To run this project, install it locally using git command:

```
$ git clone ["repository name"]
$ git pull 
```