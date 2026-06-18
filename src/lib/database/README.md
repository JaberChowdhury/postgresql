# Create the database table for wallpaper collection

```bash
DROP TABLE IF EXISTS wallpapers;
CREATE TABLE wallpapers (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    link TEXT NOT NULL,
    tags TEXT[] NOT NULL DEFAULT '{}'
);
```
