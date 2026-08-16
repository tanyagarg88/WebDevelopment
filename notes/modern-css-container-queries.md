# Modern CSS Container Queries & :has() Selector

Container queries allow styling an element based on the size of its parent container rather than the viewport.

```css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 450px) {
  .card {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1rem;
  }
}

/* Parent selector :has() */
.form-group:has(:user-invalid) {
  border-color: #ef4444;
}
```


<!-- Updated: 2026-08-16T10:02:16+05:30 [August Series Commit #1] -->
