'use client';

import { useState } from 'react';

export default function TravelLogForm() {
  const [title, setTitle] = useState('');
  return (
    <form action="">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          // placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <button className="btn btn-outline btn-success">Create</button>
    </form>
  );
}
