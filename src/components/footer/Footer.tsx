export default function Footer() {
  return (
    <footer className="w-full py-4">
      <div className="container mx-auto text-center border-t border-gray-300 pt-4">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Jovan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
