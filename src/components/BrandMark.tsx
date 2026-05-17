type BrandMarkProps = {
  className?: string;
  size?: number;
  alt?: string;
};

const LOGO_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAIAAADdvvtQAABr2klEQVR4nKW9d7xtVXU2PMZca59zG/cCF0RAUTSCCIINe0EQECzYgSgHhA0QZ8qV8vY5u8c9j1l2+8f9x2+7l3m1+9t3l2+7f7+v2a0y7b1w3z7n5z3c9xv8G1qY2m8m5z8fXc0wQm4wX5m0p4vY0j4pK8Pz4bG4sQm8vB1q2Q8oGm7bXf3w9yJmQJ8qfF0t2uQ3W7q9M2t1w9uM8GxQ2m1u+9n8bH0qQJm7d1xvQ8H3m9uYcQn9gY9s9mJf9cXr2d0n7pQHk6m6xw8fQq7mXqQ3gQm8b1m2gM5mY8bVwWc7hX1f6Z4m7b7d4n8m7z3g9Qk7k7z7m8w8nQk8m0kq6b0mQ3fXw5m1k4k9M6r8m9t7m9fVtqv7n3f3dH6l4m8m7zQJk2c6w2w0m7fVw7w4c7o7m6d7p7z8fH4m9v9m8m5v8m7m7r9v6f7g7g6h7i7j7k7l7m7n7o7p7q7r7s7t7u7v7w7x7y7z7A7B7C7D7E7F7G7H7I7J7K7L7M7N7O7P7Q7R7S7T7U7V7W7X7Y7Z7a7b7c7d7e7f7g7h7i7j7k7l7m7n7o7p7q7r7s7t7u7v7w7x7y7z7+//";

export default function BrandMark({ className = "", size = 56, alt = "AllyCheck" }: BrandMarkProps) {
  return (
    <img
      src={LOGO_DATA_URI}
      alt={alt}
      className={className}
      style={{ width: size, height: size, display: "block", objectFit: "cover" }}
    />
  );
}
