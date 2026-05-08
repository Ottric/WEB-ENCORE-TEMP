"use client";

import { Button } from "@workspace/ui/components/button";
import * as React from "react";

export default function Page() {
  const [message, setMessage] = React.useState<string>("Not loaded");
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const loadGreeting = React.useCallback(async () => {
    try {
      setStatus("loading");
      const response = await fetch("/api/hello/World", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const payload: { message: string } = await response.json();
      setMessage(payload.message);
      setStatus("success");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unknown error");
      setStatus("error");
    }
  }, []);

  React.useEffect(() => {
    void loadGreeting();
  }, [loadGreeting]);

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Gateway-first template ready</h1>
          <p>Open this app via APISIX on port 9080.</p>
          <p>
            This page calls Encore through <code>/api/hello/World</code> only.
          </p>
          <Button className="mt-2" onClick={() => void loadGreeting()}>
            Reload Greeting
          </Button>
        </div>

        <div className="rounded-md border p-3 font-mono text-xs">
          <div>Status: {status}</div>
          <div>Message: {message}</div>
        </div>

        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  );
}
