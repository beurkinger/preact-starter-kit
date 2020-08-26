
# preact-starter-kit
Some boilerplate code to kickstart Preact-based projects.

Includes :
- **Webpack** and **Preact**, configured and ready to go
- Typing through **TypeScript**
- Linting through **ESlint** and **Prettier**
- Component styling through **CSS Modules** and **CSS Variables** 
- Backward compatibility with older browsers for JS and CSS through : 
  - transpiling to ES5
  - **PostCSS** and **PostCSS-Preset-Env**

## How to use it
1. Open Terminal
2. Create a bare clone of this repository.
```shell
$ git clone --bare https://github.com/beurkinger/preact-starter-kit.git
```
3. Mirror-push to the repository you want to use.
```shell
$ cd old-repository.git```
$ git push --mirror https://github.com/exampleuser/new-repository.git
```
4. Remove the temporary local repository you created earlier.
```shell
$ cd ..
$ rm -rf old-repository.git
```
