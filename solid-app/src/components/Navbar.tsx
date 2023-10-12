import { A } from '@solidjs/router';
import { Component } from 'solid-js';

const Navbar: Component = () => {
  return (
    <nav class="navbar bg-base-300">
      <A href="/" class="btn btn-ghost normal-case text-xl">
        やりたいこと探し
      </A>
    </nav>
  );
};

export default Navbar;
