# 📜 Angular Virtual Scroll

A beginner-friendly Angular 15 project that demonstrates **Virtual Scrolling** — a technique for efficiently rendering large lists by only rendering the items visible on screen.

---

## 📌 What This Project Does

This app fetches **500 comments** from a public REST API and displays them in a **scrollable table**. Instead of rendering all 500 rows at once (which would be slow), it uses **Angular CDK Virtual Scroll** to render only the rows currently visible in the viewport.

**In simple words:** Imagine you have a phone book with 10,000 names. Instead of printing all pages at once, virtual scroll only shows you the page you're reading and prepares the next/previous pages as you scroll.

---

## 🧰 Prerequisites

Before running this project, make sure you have:

| Tool       | Minimum Version | How to Check          | Install Guide                             |
| ---------- | --------------- | --------------------- | ----------------------------------------- |
| **Node.js** | v14 or higher   | `node -v`             | [nodejs.org](https://nodejs.org)          |
| **npm**     | v6 or higher    | `npm -v`              | Comes with Node.js                        |
| **Angular CLI** | v15         | `ng version`          | `npm install -g @angular/cli@15`          |

---

## 🚀 How to Run the Project

Since this project lives inside an **Angular monorepo** (multiple projects in one workspace), you run it with:

```bash
# 1. Navigate to the monorepo root
cd angular-monorepo

# 2. Install dependencies (run this only the first time)
npm install

# 3. Start the virtual-scroll project
ng serve virtual-scroll
```

The app will open at **http://localhost:4200** in your browser.

> **💡 Tip:** If port 4200 is already in use, run: `ng serve virtual-scroll --port 4300`

---

## 📁 Project Structure

```
projects/virtual-scroll/
└── src/
    ├── index.html                 ← Entry HTML file with <app-root>
    ├── main.ts                    ← Bootstraps the Angular application
    ├── styles.scss                ← Global styles
    └── app/
        ├── app.module.ts          ← Root module — imports ScrollingModule & HttpClientModule
        ├── app.component.ts       ← Root component — renders <app-user-table>
        ├── app.component.html     ← Just contains <app-user-table>
        └── user-table/
            ├── user-table.component.ts    ← Fetches data & defines trackBy function
            ├── user-table.component.html  ← Virtual scroll table template
            └── user-table.component.scss  ← Component styles (currently empty)
```

---

## 🔍 How the Project Works (Step by Step)

### Step 1: The App Module (`app.module.ts`)

```typescript
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, UserTableComponent],
  imports: [BrowserModule, ScrollingModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**What's happening here?**

- `ScrollingModule` — This is imported from `@angular/cdk/scrolling`. It gives us the virtual scrolling directives (`cdk-virtual-scroll-viewport` and `*cdkVirtualFor`).
- `HttpClientModule` — Allows us to make HTTP requests to fetch data from an API.

### Step 2: The User Table Component (`user-table.component.ts`)

```typescript
interface Common {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTableComponent {
  constructor(private http: HttpClient) {}

  comments$ = this.http.get<Common[]>(
    'https://jsonplaceholder.typicode.com/comments',
  );

  trackById(index: number, item: Common) {
    return item.id;
  }
}
```

**What's happening here?**

| Concept                        | Explanation                                                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `interface Common`             | Defines the shape of each comment object (what fields it has and their types). This is TypeScript's way of type-safety. |
| `HttpClient`                   | Angular's built-in service for making HTTP requests. Injected via the constructor.                                   |
| `comments$`                    | An **Observable** that fetches all 500 comments from the JSONPlaceholder API. The `$` suffix is a naming convention for Observables. |
| `ChangeDetectionStrategy.OnPush` | Tells Angular: "Only re-render this component when its inputs change or an Observable emits." This improves performance. |
| `trackById()`                  | A function that helps Angular identify each row uniquely, so it doesn't re-create DOM elements unnecessarily.        |

### Step 3: The Template (`user-table.component.html`)

```html
<h2>Angular Virtual Scroll</h2>
<cdk-virtual-scroll-viewport itemSize="80" style="height: 500px">
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Comment</th>
      </tr>
    </thead>
    <tbody>
      <tr *cdkVirtualFor="let comment of comments$; trackBy: trackById">
        <td>{{ comment.id }}</td>
        <td>{{ comment.name }}</td>
        <td>{{ comment.email }}</td>
        <td>{{ comment.body }}</td>
      </tr>
    </tbody>
  </table>
</cdk-virtual-scroll-viewport>
```

**What's happening here?**

| Element / Directive              | Explanation                                                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `<cdk-virtual-scroll-viewport>` | The **container** for virtual scrolling. It creates a scrollable area and manages which items to render.           |
| `itemSize="80"`                 | Tells the viewport that each row is **80 pixels tall**. This is needed so it can calculate how many rows fit on screen. |
| `style="height: 500px"`        | The viewport must have a **fixed height** — this is the "window" through which you see the data.                   |
| `*cdkVirtualFor`               | Works like `*ngFor` but with virtual scrolling — it only creates DOM elements for visible items.                   |
| `comments$`                    | The Observable is used directly in the template. Angular CDK handles subscribing to it automatically.              |
| `trackBy: trackById`           | Links to the `trackById` function to optimize re-rendering.                                                        |

---

## 🎯 Key Angular Concepts Used

| #  | Concept                | Where It's Used                  | What It Does                                                      |
| -- | ---------------------- | -------------------------------- | ----------------------------------------------------------------- |
| 1  | **Virtual Scrolling**  | Template (`*cdkVirtualFor`)      | Renders only visible rows for better performance                  |
| 2  | **CDK ScrollingModule**| `app.module.ts`                  | Provides virtual scroll directives                                |
| 3  | **HttpClient**         | `user-table.component.ts`        | Makes HTTP GET request to fetch data                              |
| 4  | **Observables (RxJS)** | `comments$`                      | Handles async data from HTTP as a stream                          |
| 5  | **OnPush Change Detection** | `user-table.component.ts`  | Optimizes rendering by reducing unnecessary change detection runs |
| 6  | **trackBy**            | Template + Component             | Helps Angular track items by ID for efficient DOM updates         |
| 7  | **TypeScript Interface** | `Common` interface             | Provides type-safety for the API response data                    |
| 8  | **Component Architecture** | `AppComponent` → `UserTableComponent` | Parent-child component structure                         |

---

## 🌐 API Used

This project uses the free **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)** API:

- **Endpoint:** `https://jsonplaceholder.typicode.com/comments`
- **Returns:** 500 comment objects, each with `postId`, `id`, `name`, `email`, and `body` fields
- **No API key needed** — it's a free, public testing API

---

## ❓ Why Use Virtual Scroll?

| Scenario                   | Without Virtual Scroll     | With Virtual Scroll        |
| -------------------------- | -------------------------- | -------------------------- |
| 500 rows                   | 500 DOM elements created   | ~10-15 DOM elements created |
| Scroll performance         | Can be laggy               | Smooth and fast             |
| Memory usage               | Higher                     | Lower                      |
| Initial render time        | Slower                     | Faster                     |

**When to use it:** Whenever you have a large list (100+ items) that users need to scroll through.

---

## 📚 Learn More

- [Angular CDK Virtual Scrolling (Official Docs)](https://material.angular.io/cdk/scrolling/overview)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Angular HttpClient Guide](https://angular.io/guide/http)
- [Angular Change Detection](https://angular.io/guide/change-detection)
