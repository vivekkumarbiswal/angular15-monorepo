# Angular Virtual Scroll + RxJS BehaviorSubject + Pagination + Infinite Scroll

This project demonstrates how to efficiently render **large datasets** in Angular using a combination of:

- Angular CDK Virtual Scroll
- RxJS BehaviorSubject
- API Pagination
- Infinite Scroll
- Async Pipe
- `trackBy` optimization
- `OnPush` Change Detection

This architecture is commonly used in **large enterprise Angular applications** to handle datasets containing **thousands or millions of rows** while keeping the UI fast and memory usage low.

---

# Problem

Rendering large datasets directly in the DOM can cause serious performance issues.

Example:

```
Dataset size = 100,000 rows
```

If Angular renders all rows:

```
DOM elements = 100,000
```

This leads to:

- slow rendering
- heavy memory usage
- laggy scrolling

---

# Solution Architecture

We combine several techniques to solve different performance problems.

```
Virtual Scroll   → DOM performance
Pagination       → Network performance
BehaviorSubject  → State management
Infinite Scroll  → User experience
```

Complete architecture:

```
API
 ↓
Service (pagination)
 ↓
Component
 ↓
BehaviorSubject (state)
 ↓
Async Pipe
 ↓
Virtual Scroll
```

---

# Virtual Scroll

Angular CDK Virtual Scroll renders **only the items visible in the viewport**.

Example:

```
Dataset = 10,000 rows
Viewport = 500px
Row height = 80px
```

Visible rows:

```
500 / 80 ≈ 6 rows
```

Angular renders:

```
6 visible rows + buffer ≈ 10–15 rows
```

Even if the dataset grows to thousands of rows, the DOM remains small.

---

# Pagination

Instead of loading the entire dataset at once, we fetch small chunks from the server.

Example API requests:

```
GET /comments?_page=1&_limit=20
GET /comments?_page=2&_limit=20
GET /comments?_page=3&_limit=20
```

Each request returns only **20 records**.

Benefits:

- smaller network requests
- faster API responses
- reduced memory usage

---

# BehaviorSubject

A BehaviorSubject is used to store the **current state of the dataset**.

```
comments$ = new BehaviorSubject<any[]>([]);
```

Unlike a normal Observable, a BehaviorSubject:

- stores the latest value
- immediately emits that value to new subscribers

Example state progression:

```
Initial state
[]
```

After first API request:

```
[1..20]
```

After second API request:

```
[1..40]
```

After third API request:

```
[1..60]
```

Each new API response is appended to the existing dataset.

```
this.comments$.next([...currentData, ...newData]);
```

---

# Infinite Scroll

Infinite scrolling loads more data when the user scrolls near the bottom of the list.

Angular CDK provides a scroll event:

```
(scrolledIndexChange)
```

Example logic:

```
if (currentIndex > totalItems - 10)
   loadNextPage()
```

This ensures new data loads **before the user reaches the end of the list**.

---

# Async Pipe

The template uses the `async` pipe to subscribe to the BehaviorSubject.

```
*cdkVirtualFor="let comment of comments$ | async"
```

Benefits:

- automatic subscription
- automatic unsubscription
- triggers change detection
- cleaner code

---

# Virtual Scroll Item Size

Virtual scroll requires a fixed row height.

```
itemSize = row height in pixels
```

Example:

```
Row height = 80px
```

```
<cdk-virtual-scroll-viewport itemSize="80">
```

Angular uses this value to calculate the virtual scroll height.

```
totalScrollHeight = itemSize × numberOfItems
```

---

# Data Flow

Full lifecycle of data in the application:

```
Component loads
 ↓
page = 1
 ↓
API request
 ↓
BehaviorSubject receives data
 ↓
Async pipe updates template
 ↓
Virtual scroll renders visible rows
 ↓
User scrolls
 ↓
Scroll threshold reached
 ↓
Load next page
 ↓
Append new data
 ↓
BehaviorSubject emits updated dataset
```

---

# Example Timeline

User interaction timeline:

```
Initial load
20 rows
```

User scrolls:

```
Page 2 loaded
40 rows total
```

User scrolls again:

```
Page 3 loaded
60 rows total
```

However, the DOM only renders a small number of elements.

```
~15 DOM elements
```

---

# Why This Architecture Scales

This design optimizes three key aspects of performance.

### Network Efficiency

Pagination ensures small API responses.

### Memory Efficiency

Only loaded data is stored.

### DOM Efficiency

Virtual Scroll renders only visible elements.

---

# Technologies Used

- Angular
- Angular CDK Virtual Scroll
- RxJS BehaviorSubject
- HttpClient
- Async Pipe
- OnPush Change Detection
- TrackBy Optimization

---

# When to Use This Pattern

This architecture is ideal for applications that display large lists such as:

- log viewers
- analytics dashboards
- admin tables
- messaging systems
- monitoring systems

---

# Summary

By combining:

```
Virtual Scroll
+ Pagination
+ BehaviorSubject
+ Infinite Scroll
```

Angular applications can efficiently handle **extremely large datasets** while maintaining smooth scrolling and minimal memory usage.

---

# Future Improvements

Possible enhancements:

- loading skeletons
- caching with `shareReplay`
- sorting and filtering
- server-side search
- sticky headers
- error handling
- retry strategies

---
