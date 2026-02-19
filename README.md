# Angular Monorepo Guide 🚀

This repository contains multiple Angular applications managed inside a single workspace (Monorepo).

---

# 📦 What is This?

A **Monorepo** allows multiple Angular applications to live inside a single repository with:

* One `package.json`
* One `node_modules`
* Shared Angular version
* Shared libraries
* Easier maintenance

---

# 🏗 Project Structure

## Angular CLI Monorepo

```
my-workspace/
│
├── projects/
│   ├── admin/
│   ├── user/
│   ├── dashboard/
│
├── angular.json
├── package.json
└── node_modules/
```

## Nx Monorepo

```
my-workspace/
│
├── apps/
│   ├── admin/
│   ├── user/
│
├── libs/
├── nx.json
├── package.json
└── node_modules/
```

---

# 🚀 How to Run a Specific Project

## ✅ Angular CLI Workspace

### Run a specific app

```bash
ng serve admin
```

```bash
ng serve user
```

### Run on custom port

```bash
ng serve admin --port 4201
ng serve user --port 4202
```

### Run default project

If no project name is provided:

```bash
ng serve
```

Angular will run the project defined as `defaultProject` in `angular.json`.

---

## ✅ Nx Monorepo

### Run a specific app

```bash
nx serve admin
```

or

```bash
nx run admin:serve
```

---

# 🛠 How to Build a Specific Project

## Angular CLI

```bash
ng build admin
```

## Nx

```bash
nx build admin
```

---

# ➕ How to Add New Application

## Angular CLI

```bash
ng generate application new-app
```

## Nx

```bash
nx generate application new-app
```

---

# 📚 Benefits of Monorepo

* Single dependency management
* Shared code and libraries
* Easier Angular upgrades
* Faster CI/CD
* Consistent project structure
* Better team collaboration

---

# 🔥 Example: Running Multiple Apps Together

```bash
ng serve admin --port 4200
ng serve user --port 4201
ng serve dashboard --port 4202
```

You can run multiple applications simultaneously.

---

# 🎯 Best Practices

* Use shared libraries for common components and services.
* Keep Angular version consistent.
* Define a clear folder structure.
* Avoid duplicating logic across applications.
* Use environment-specific configurations properly.

---

# 📌 Summary

To run any project in this monorepo:

* Use `ng serve <project-name>` (Angular CLI)
* Use `nx serve <project-name>` (Nx)

That’s it! 🎉
