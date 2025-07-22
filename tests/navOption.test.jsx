import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/navBar';
import Navoption from '../src/components/navOption';

describe('Navoption', () => {
    it('returns truthy', () => {
        expect(true).toBeTruthy();
    })
})