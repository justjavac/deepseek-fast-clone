"use client";

import type { ReactNode } from "react";
import {
  AssistantRuntimeProvider,
  type ChatModelAdapter,
  useLocalRuntime,
} from "@assistant-ui/react";

const WhyAreYouSoFastAdapter: ChatModelAdapter = {
  async run() {
    return {
      content: [
        {
          type: "text",
          text: "服务器繁忙，请稍后再试。",
        },
      ],
    };
  },
};

export function DeepseekFastCloneProvider({ children }: Readonly<{
  children: ReactNode;
}>) {
  const runtime = useLocalRuntime(WhyAreYouSoFastAdapter);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
